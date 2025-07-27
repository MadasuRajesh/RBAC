using RBAC.Api.DTOs;
using RBAC.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RBAC.Api.Services.Interfaces
{
    public interface IContentService
    {
        Task<IEnumerable<Content>> GetAllAsync();
        Task<Content> GetByIdAsync(int id);
        Task AddAsync(Content content);
        Task UpdateAsync(Content content);
        Task<bool> DeleteAsync(int id, string currentUser);
    }
}
