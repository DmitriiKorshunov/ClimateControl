import pika, json

reply='Non connected'
filename = 'sensors.json'  # use the file extension .json
with open(filename, 'w') as file_object:  # open the file in write mode
    json.dump(reply, file_object)


def main():
    credentials=pika.PlainCredentials('username','password')
    connection = pika.BlockingConnection(pika.ConnectionParameters(
            host='192.168.0.103', port=5672, virtual_host='/', credentials=credentials))
    channel = connection.channel()
    channel.queue_declare(queue='test_queue')
    def callback(ch, method, properties, body):
        global reply
        reply=body
        data=json.loads(reply)
        with open(filename, 'w') as file_object:  # open the file in write mode
            json.dump(data, file_object)
    channel.basic_consume('test_queue', callback)
    channel.start_consuming()

if __name__ == '__main__':
    main()