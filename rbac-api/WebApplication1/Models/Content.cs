using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RBAC.Api.Models
{
    public class Content
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public string CreatedBy { get; set; }
    }

    public class InsertContent
    {
        public string Title { get; set; }

        public string Body { get; set; }
    }
}
