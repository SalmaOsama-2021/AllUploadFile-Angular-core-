using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UploadAllFile.Models;

namespace UploadAllFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly UploadFileContext _uploadfile;
        public DocumentsController(UploadFileContext uploadFile)
        {
            _uploadfile = uploadFile;
        }
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            try
            {
                var Alluser = _uploadfile.AllDocuments.ToList();
              
                return Ok(Alluser);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
        [HttpPost]
        public IActionResult CreateUser([FromBody] AllDocument AllDocuments)
        {
            try
            {
                if (AllDocuments == null)
                {
                    return BadRequest("User object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                AllDocuments.Id = Guid.NewGuid();
                _uploadfile.Add(AllDocuments);
                _uploadfile.SaveChanges();

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
