from django.conf import settings


class StackOverflowMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response

    # response
    def process_exception(self, request, exception):
        print("5: process_exception")
        if settings.DEBUG:
            print ("")
            # print(exception.__class__.__name__)
            # print(exception.message)
        return None

    def process_template_response(self, request, response):
        print("3: process_template_response")
        return response

    def process_response(self, request, response):
        print("4: process_response")
        return response

    # request
    def process_request(self, request):
        print("1: process_request")

    def process_view(self, request, view_func, view_args, view_kwargs):
        print ("2: process_view")
        return None
