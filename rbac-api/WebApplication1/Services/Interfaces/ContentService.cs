using RBAC.Api.DTOs;
using RBAC.Api.Interfaces;
using RBAC.Api.Models;
using RBAC.Api.Services.Interfaces;

namespace RBAC.Api.Services
{
    public class ContentService : IContentService
    {
        private readonly IRepository<Content> _repo;

        public ContentService(IRepository<Content> repo)
        {
            _repo = repo;
        }

        public async Task<IEnumerable<Content>> GetAllAsync()
        {
            var data = await _repo.GetAllAsync();
            return data;
        }

        public async Task<Content> GetByIdAsync(int id)
        {
            var content = await _repo.GetByIdAsync(id);
            if (content == null) return null;

            return content;
        }

        public async Task AddAsync(Content content)
        {

            await _repo.AddAsync(content);
            await _repo.SaveAsync();
        }

        public async Task UpdateAsync(Content content)
        {
            try
            {

                await _repo.UpdateAsync(content);
                await _repo.SaveAsync();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> DeleteAsync(int id, string currentUser)
        {
            var content = await _repo.GetByIdAsync(id);
            if (content == null || content.CreatedBy != currentUser) return false;

            _repo.Delete(content);
            await _repo.SaveAsync();
            return true;
        }
    }
}
