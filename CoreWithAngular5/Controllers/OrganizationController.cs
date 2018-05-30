using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{
    [Produces("application/json")]
    public class OrganizationController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetOrganizations")]
        public IEnumerable<Organization> Index()
        {
            return objuser.GetOrganizations();

        }

        [HttpPost]
        [Route("api/AddOrganization")]
        public int AddOrganization([FromBody] Organization organization)
        {
            return objuser.AddOrganization(organization);
        }
    }
}