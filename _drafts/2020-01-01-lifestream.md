---
layout: project
title: Lifestream
excerpt: A log of my activities in the internet.
tags: projects
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="/js/jquery.lifestream.js"></script>
<div id="lifestream">&nbsp;</div>	

	
<script>
  $("#lifestream").lifestream({
limit: 20,
    list:[
    
      {
        service: "twitter",
        user: "crodrigoturner"
      }
	  ,
      {
        service: "pinboard",
        user: "crodrigoturner"
      }
      ,
              {
          service: 'lastfm',
          user: 'crodrigoturner'
        },
        {
          service: 'github',
          user: 'crodrigoturner'
        },
        {
          service: 'dribbble',
          user: 'crodrigoturner'
        }
    ]
  });
</script>

