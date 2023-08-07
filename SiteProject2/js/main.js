// <![CDATA[
 
var result;
	    
function check()
	 
{
	 
	var question;
	var value_false;
	var value_true;
	       
	       
	question = 1;
	value_false = 0;
	value_true = 0;
	       
	       
	result = "";
	 
	var choice;
	       
	for (question = 1; question <= 3; question++) 
	{
	       
		var q = document.forms['quiz'].elements['q'+question];
	 
		for (var i = 0; i < q.length; i++) 
		{
			if (q[i].checked) 
			{
				choice = q[i].value;
			}
		}
	 
		if (choice == "value1") 
		{
			value1++;
		}
	 
		if (choice == "value2") 
		{
			value2++;
		}
	 
	 
	}
	 
	if (value2 == 0) 
	{
	 
		// Нет правильных ответов
		result = "ocenka2";
	}
	 
	else if (value2 == 1) 
	{
	 
		// Один правильный ответ
		result = "ocenka3";
	}
	 
	else if (value2 == 2) 
	{
	 
		// Два правильных ответа
		result = "ocenka4";
	}
	 
	else if (value2 == 3) 
	{
	 
		// Три правильных ответа
		result = "ocenka5";
	}
	 
	 
	else 
	{
		result = "404";
	}
	 
	window.location = result + '.html';
	 
}
