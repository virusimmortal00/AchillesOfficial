//This function changes the display property of code within the "content" div
function change_page(pageName)
{
	var nameList = ["music","video","pics","merch","home"];
	var pos = nameList.indexOf(pageName);
	for(x=0;x<4;x++)
	{
		if(x!=pos)
		{	
			document.getElementById(nameList[x]).style.display = "none";	
		}
		else
		{
			document.getElementById(pageName).style.display = "inherit";
		}
	}					
}