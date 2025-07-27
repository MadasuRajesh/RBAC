using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RBAC.Api.Models;

namespace RBAC.Api
{
    // ⛳️ This must inherit from IdentityDbContext!
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Content> Contents { get; set; }
    }
}
