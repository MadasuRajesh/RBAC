using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RBAC.Api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveContentUserFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contents_AspNetUsers_CreatedBy",
                table: "Contents");

            migrationBuilder.DropIndex(
                name: "IX_Contents_CreatedBy",
                table: "Contents");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Contents",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Contents",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Contents_CreatedBy",
                table: "Contents",
                column: "CreatedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Contents_AspNetUsers_CreatedBy",
                table: "Contents",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
