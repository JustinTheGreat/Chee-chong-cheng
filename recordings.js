$(document).ready(function()
{
   $('#Extension1-filter').on('propertychange input', function(e)
   {
      $('.Extension1-no-results').remove();
      var $this = $(this);
      var search = $this.val().toLowerCase();
      var $target = $('#Extension1');
      var $rows = $target.find('tbody tr');
      if (search == '') 
      {
         $rows.removeClass('filter-hide');
         buildNav();
         paginate();
      } 
      else 
      {
         $rows.each(function()
         {
            var $this = $(this);
            $this.text().toLowerCase().indexOf(search) === -1 ? $this.addClass('filter-hide') : $this.removeClass('filter-hide');
         })
         buildNav();
         paginate();
         if ($target.find('tbody tr:visible').size() === 0) 
         {
            var col_span = $target.find('tr').first().find('td').size();
            var no_results = $('<tr class="Extension1-no-results"><td colspan="'+col_span+'">No results found</td></tr>');
            $target.find('tbody').append(no_results);
         }
      }
   });
   $('.panel-heading span.filter').on('click', function(e)
   {
      var $this = $(this), 
      $panel = $this.parents('.panel');
      $panel.find('.panel-body').slideToggle(function() 
      {
         if($this.css('display') != 'none') 
         {
            $panel.find('.panel-body input').focus();
         }
      });
   });
   $('#Extension1').each(function()
   {
      var currentPage = 0;
      var numPerPage = 5;
      var $table = $(this);
      var numRows = $table.find('tbody tr').length;
      var numPages = Math.ceil(numRows / numPerPage);
      var $pagination = $('#Extension1-pagination');
      paginate = function()
      {
         $pagination.find('li').eq(currentPage+1).addClass('active').siblings().removeClass('active');
         var $prev = $pagination.find('li:first-child');
         var $next = $pagination.find('li:last-child');
         if (currentPage == 0)
         {
            $prev.addClass('disabled');
         }
         else
         {
            $prev.removeClass('disabled');
         }
         if (currentPage == (numPages-1))
         {
            $next.addClass('disabled');
         }
         else
         {
            $next.removeClass('disabled');
         }
         $table.find('tbody tr').not('.filter-hide').removeClass('paginate-show').addClass('paginate-hide').slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).removeClass('paginate-hide').addClass('paginate-show');;
      };
      buildNav = function()
      {
         currentPage = 0;
         numRows = $table.find('tbody tr').not('.filter-hide').length;
         numPages = Math.ceil(numRows / numPerPage);
         $pagination.find('li').not($pagination.find('li:first-child')).not($pagination.find('li:last-child')).remove();
         for (var page = 0; page < numPages; page++)
         {
            var item = '<a>' + (page + 1) + '</a>';
            $('<li></li>').html(item)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               paginate();
            }).appendTo($pagination).addClass('clickable');
         }
         $pagination.find('li').eq(1).appendTo($pagination);
      }
      buildNav();
      $pagination.insertAfter($table.parent()).find('li:nth-child(2)').addClass('active');
      $pagination.find('li:first-child').click(function()
      {
         if (currentPage > 0)
         {
            currentPage--;
         }
         paginate();
      });
      $pagination.find('li:last-child').click(function()
      {
         if (currentPage < (numPages-1))
         {
            currentPage++;
         }
         paginate();
      });
      paginate();
   });
});