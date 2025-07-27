using Microsoft.AspNetCore.Identity;
using RBAC.Api.DTO;
using RBAC.Api.Models;

namespace RBAC.Api.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserDto>> GetAllUsersAsync();
        Task<UserDto> GetUserByIdAsync(string id);
        Task<IdentityResult> CreateUserAsync(CreateUserDto userDto);
        Task<bool> UpdateUserAsync(string id, CreateUserDto dto);
        Task<bool> DeleteUserAsync(string id);
    }
}
