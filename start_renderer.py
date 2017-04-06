#!/usr/bin/env python

import sys, getopt
import SimpleHTTPServer
import SocketServer

def print_help():
    print __file__+' -p --port <port> [8080]'

def main(argv):
    m_port = 8080
    try:
        opts, args = getopt.getopt(argv,"hp:",["port="])
    except getopt.GetoptError:
        print_help()
        sys.exit(1)

    for opt, arg in opts:
        if opt == '-h':
            print_help()
            sys.exit()
        elif opt in ("-p", "--port"):
            m_port = int(arg)

    handler = SimpleHTTPServer.SimpleHTTPRequestHandler

    httpd = SocketServer.TCPServer(("", m_port), handler)

    print "HTTP Server running on port: "+str(m_port)
    httpd.serve_forever()

if __name__ == "__main__":
    main(sys.argv[1:])
