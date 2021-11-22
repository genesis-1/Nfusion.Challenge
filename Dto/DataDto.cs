using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nfusion.Challenge.Dto
{
    public class DataDto
    {

            public string Symbol { get; set; }
            public double Bid { get; set; }
            public double Ask { get; set; }
            public double OneDayChange { get; set; }
            public double OneDayPercentChange { get; set; }
        
    }
}
