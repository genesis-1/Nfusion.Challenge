using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nfusion.Challenge
{
    public class MetalInfo
    {
        public string RequestedSymbol { get; set; }
        public string RequestedCurrency { get; set; }
        public string RequestedUnitOfMeasure { get; set; }
        public bool Success { get; set; }
        public Metal Metal { get; set; }
    }
}
