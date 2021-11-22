using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Nfusion.Challenge.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Nfusion.Challenge.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class MetalInfoController : ControllerBase
    {
        private readonly IOptions<NFusionSettings> _nfussionConfig;
        private readonly HttpClient client;
        private readonly IMapper _mapper;


        public MetalInfoController(IOptions<NFusionSettings> nfussionConfig, IMapper mapper)
        {
            _mapper = mapper;
            _nfussionConfig = nfussionConfig;
            client = new HttpClient { BaseAddress = new Uri(nfussionConfig.Value.BaseUrl) };

        }

        [HttpGet]
        public async Task<List<MetalInfoDto>> GetMetalInfo()
        {
            var url = "/api/v1/Metals/spot/summary?token=401f3108-6d01-46d0-901a-5152e42345e6&metals=gold%2Csilver%2Cplatinum%2Cpalladium";
            var result = new List<MetalInfoDto>();
            var response = await client.GetAsync(url);
            if(response.IsSuccessStatusCode)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();
                var resultMetalInfo = JsonConvert.DeserializeObject<List<MetalInfo>>(stringResponse);
                result = _mapper.Map<List<MetalInfoDto>>(resultMetalInfo);

            }
            else
            {
                throw new HttpRequestException(response.ReasonPhrase);
            }

            return result;
        }


        //[HttpPost]
        //public IActionResult GetMetalInfo(string ask = null, string bid = null)
        //{

        //}


    }
}
