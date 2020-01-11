from channels import include


project_routing = [
    include('myapp.routing.app_routing', path=r'^/custom_websocket_path'),
]
