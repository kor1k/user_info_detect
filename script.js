$.getJSON('https://api.ipdata.co/?api-key=test', function (data){$('#user_ip_data').html(data.ip);$('#continent_name_data').html(data.continent_name);$('#country_name_data').html(data.country_name);$('#country_code_data').html(data.country_code);$('#flag').attr('src', data.flag);console.log(data)
});
