const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData() {
    const { data } = await axios.get('https://dev.to/nickymeuleman/how-to-unfork-a-repo-on-github-2a8');
    const $ = cheerio.load(data);
    
    // Example: Extract titles of articles
    let head = $('head title').text();
    console.log(head);
    $('head meta').each((i, el) => {
      if ($(el).attr('name') !== undefined && $(el).attr('name') === 'description'){

        console.log($(el).attr('content'));
      }
  });

}

scrapeData();
