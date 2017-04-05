#!/usr/bin/env python

import SimpleHTTPServer
import SocketServer

PORT = 8080

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "HTTP Server running on port: ", PORT
httpd.serve_forever()
