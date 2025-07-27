using Microsoft.AspNetCore.Identity;
using RBAC.Api.Models;

namespace RBAC.Api
{
    public static class DbSeeder
    {
        public static async Task SeedRolesAndAdmin(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            string[] roles = { "Admin", "Editor", "Viewer" };

            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                    await roleManager.CreateAsync(new IdentityRole(role));
            }

            var admin = new ApplicationUser { UserName = "admin", Email = "admin@example.com", EmailConfirmed = true };
            var existingUser = await userManager.FindByNameAsync(admin.UserName);

            if (existingUser == null)
            {
                var result = await userManager.CreateAsync(admin, "Admin@123");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                }
            }
        }
    }
}
