using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nfusion.Challenge
{
    public class Metal
    {
        public string Symbol { get; set; }
        public string BaseCurrency { get; set; }
        public double Last { get; set; }
        public int Bid { get; set; }
        public int Ask { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Open { get; set; }
        public double OneDayValue { get; set; }
        public double OneDayChange { get; set; }
        public double OneDayPercentChange { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
