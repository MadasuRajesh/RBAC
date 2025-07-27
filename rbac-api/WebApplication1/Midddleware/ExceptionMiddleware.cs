using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;

namespace RBAC.Api.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                httpContext.Response.ContentType = "application/json";

                var error = new { message = ex.Message, status = httpContext.Response.StatusCode };
                var json = JsonSerializer.Serialize(error);

                await httpContext.Response.WriteAsync(json);
            }
        }
    }
}
