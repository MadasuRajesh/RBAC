using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RBAC.Api.DTOs;
using RBAC.Api.Interfaces;
using RBAC.Api.Models;
using RBAC.Api.Services.Interfaces;

namespace RBAC.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContentController : ControllerBase
    {
        private readonly IContentService _IContentService;

        public ContentController(IContentService contentService)
        {
            _IContentService = contentService;
        }

        [Authorize(Roles = "Admin,Editor")]
        [HttpPost]
        public async Task<IActionResult> Create(InsertContent insertContent)
        {
            if (insertContent != null)
            {

                // Get username from token
                var username = User.Identity?.Name;

                if (username == null)
                {
                    throw new Exception("Invalid User");
                }
                Content conetent = new Content
                {
                    Title = insertContent.Title,
                    Body = insertContent.Body,
                    CreatedBy = username,
                    CreatedAt = DateTime.Now,
                };
                await _IContentService.AddAsync(conetent);
                return Ok(insertContent);
            }
            return BadRequest("Invalid content");
        }

        [Authorize(Roles = "Admin,Editor")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, InsertContent updateContent)
        {
            Content content = await _IContentService.GetByIdAsync(id);
            if (content == null) return NotFound();
            // Get username from token
            var username = User.Identity?.Name;

            if (username == null)
            {
                throw new Exception("Invalid User");
            }
            content.Title = updateContent.Title;
            content.Body = updateContent.Body;
            content.CreatedBy = username;
            await _IContentService.UpdateAsync(content);
            return Ok(content);
        }

        [Authorize(Roles = "Admin,Editor,Viewer")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _IContentService.GetAllAsync();
            return Ok(items);
        }
    }
}
