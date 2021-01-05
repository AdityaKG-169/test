var para = document.createElement("div");
para.style.width="100px"
para.style.height="40px"
para.style.backgroundColor="#25D366"
para.style.position="fixed"
para.style.bottom="20px"
para.style.right="20px"
para.style.borderRadius="40px"
para.style.display="flex"
para.style.flexDirection="column"
para.style.justifyContent="center"
para.style.alignItems="center"
para.style.color="black"

var node = document.createTextNode("Chat Here");
para.appendChild(node);
var element = document.getElementById("PageContainer");
element.appendChild(para);
