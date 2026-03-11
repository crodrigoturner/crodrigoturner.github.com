

<!--<input type="text" class="quicksearch" placeholder="Search" />
  <div id="filters" class="button-group">
<button class="button" data-filter="*">all</button>
{% assign tags = site.tags | sort %}
{% for tag in tags %}
<button class="button" data-filter='.{{ tag | first | slugify }}'>{{ tag[0] | replace:'-', ' ' }}</button>
{% endfor %}
</div>-->
<!--<input type="text" class="quicksearch" placeholder="Search" />
  <div id="filters" class="button-group">
<button class="button" data-filter="*">all</button>
{% assign tags = site.tags | sort %}
{% for tag in tags %}
<button class="button" data-filter='.{{ tag | first | slugify }}'>{{ tag[0] | replace:'-', ' ' }}</button>
{% endfor %}
</div>-->


</a><!--{% if page.comments == true %} · <a href="{{ page.url }}">Deja un comentario</a>{% endif %}-->

<!--{% for post in site.posts %}
<article class="item {{post.lang}}">
<h5>{{ post.title }}</h5>
{% if post.content contains '<!--more-->' %}

{{ post.content | split:'<!--more-->' | first }}

    <input type="checkbox" class="read-more-state" id="{{ post.url }}"/>
    <div class="read-more">
        {{ post.content | split:'<!--more-->' | last }}
    </div>
    <label for="{{ post.url }}" class="read-more-trigger"></label>
{% else %}
    {{ post.content }}
{% endif %}


</article>
{% endfor %}-->

<span class="tagline">0.99<sup>365</sup> = 0.025; 1.01<sup>365</sup> = 37.783</span>

<!--
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
{% assign vids = tag[1] | sort %}

{% if vids != empty %}

<article class="item">
<h4 id="{{tag[0] | uri_escape | uppercase}}">{{tag[0]}}</h4>
{% for p in vids %}
<div class="hp"><h5><a href="{{ p.url }}">{{ p.title }}</a></h5>
<span class="excerpt">{{p.excerpt}} {{p.tags}}</span></div> 
{% endfor %}
</article>

{% endif %}

{% endfor %}-->


<div id="isotope-list">
{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts %}
<a href="{{post.url}}" class="post {{ post.tags | sort | join: " " }}">{{post.title}}</a>
{% endfor %}
</div>

<script>
var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;

// init Isotope
var $grid = $('#isotope-list').isotope({
 itemSelector : '.post',
   masonry: {
    columnWidth: 100
  },

  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },
});

$('#filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  buttonFilters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  buttonFilter = concatValues( buttonFilters );
  // Isotope arrange
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

</script>

<ul>
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
{% assign vids = tag[1] | sort %}
{% if vids != empty %}
<li>
<h3 id="{{tag[0] | uri_escape | Capitalize}}"><a href="/tag/{{tag[0]}}">{{tag[0]}}</a></h3>
{% for p in vids %}
<h5><a href="{{ p.url }}">{{ p.title }}</a></h5>
{% endfor %}
</li>
{% endif %}

{% endfor %}
</ul>