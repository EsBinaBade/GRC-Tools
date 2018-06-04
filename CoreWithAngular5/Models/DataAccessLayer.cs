using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class DataAccessLayer
    {
        CoreWithangular5Context db = new CoreWithangular5Context();

        public IEnumerable<User> GetUser()
        {
            try
            {
                return db.User.ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<ProductKey> GetProductKey()
        {
            try
            {
                return db.ProductKey.ToList();
            }
            catch
            {
                throw;
            }
        }
        //get all organization
        public IEnumerable<Organization> GetOrganizations()
        {
            try
            {
                return db.Organization.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int UpdateOrganization(Organization organization)
        {
            try
            {
                db.Entry(organization).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee 
        public Organization GetOrganizationById(int organizationId)
        {
            try
            {
                Organization organization = db.Organization.Find(organizationId);
                return organization;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteOrganization(int organizationId)
        {
            try
            {
                Organization org = db.Organization.Find(organizationId);
                db.Organization.Remove(org);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record   
        public int Adduser(User user)
        {
            try
            {
                db.User.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddProductKey(ProductKey productKey)
        {
            try
            {
                db.ProductKey.Add(productKey);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        

        //to Add new Organization
        public int AddOrganization(Organization organization)
        {
            try
            {
                db.Organization.Add(organization);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
