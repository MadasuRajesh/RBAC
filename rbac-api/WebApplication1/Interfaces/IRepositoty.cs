﻿using System.Collections.Generic;
using System.Threading.Tasks;

namespace RBAC.Api.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        void Delete(T entity);
        Task SaveAsync();
    }
}
