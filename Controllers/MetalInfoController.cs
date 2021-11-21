using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Nfusion.Challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetalInfoController : ControllerBase
    {
        private readonly IOptions<NFusionSettings> _nfussionConfig;


        public MetalInfoController(IOptions<NFusionSettings> nfussionConfig)
        {
            _nfussionConfig = nfussionConfig;
        }

        //[HttpGet]
        //public IActionResult GetMetalInfo()
        //{
        //    using (var client = new HttpClient())
        //    {
        //        client.DefaultRequestHeaders.Add("Authorization", "Bearer " + _nfussionConfig.Value.Token);


        //    }
        //}


    }
}
