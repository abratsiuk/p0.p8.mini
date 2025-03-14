using Microsoft.EntityFrameworkCore;
using Test_01.Models;

namespace Test_01.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Добавим DbSet для сущностей позже
        public DbSet<Product> Products { get; set; }
    }
}
