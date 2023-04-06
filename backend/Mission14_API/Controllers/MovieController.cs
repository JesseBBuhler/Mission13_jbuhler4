using Microsoft.AspNetCore.Mvc;
using Mission14_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;
        public MovieController(MovieDBContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {

            return context.Movies.ToArray();
        }
    }
}
