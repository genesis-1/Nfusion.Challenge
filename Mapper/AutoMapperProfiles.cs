using AutoMapper;
using Nfusion.Challenge.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nfusion.Challenge.Mapper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Data, DataDto>();
            CreateMap<MetalInfo, MetalInfoDto>().ForMember(pts => pts.DataDto, opt => opt.MapFrom(ps => ps.Data));

        }
    }


}