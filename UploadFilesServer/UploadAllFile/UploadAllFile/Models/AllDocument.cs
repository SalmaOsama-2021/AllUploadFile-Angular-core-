
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace UploadAllFile.Models
{

    public class AllDocument
    {
        [Key]
        public Guid Id { get; set; }

        [Required]

        public string DocumentTitle { get; set; }

        [Required]
        public string DocumentDesciption { get; set; }
        [Required]
        public string DocumentURL { get; set; }
        [Required]
        //[DataType(DataType.Date)]
        //[Column(TypeName = "Date")]
        public string CreatationDate { get; set; }
        public string fileName { get; set; }

    }
}
