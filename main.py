import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
def main():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("Server running at localhost:" + str(PORT))
        httpd.serve_forever()


if __name__ == "__main__":
   main()
