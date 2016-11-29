Spree::ProductsController.class_eval do
   before_action :load_data, :only => :time_delivery
  
  def time_delivery
    # your code goes here
    time =  Time.now.in_time_zone('Chennai').hour
    date1 = DateTime.now.in_time_zone('Chennai').to_date + 2
    date2 = DateTime.now.in_time_zone('Chennai').to_date + 3
  	

    if time>0 and time<13
  	@delivery="Will be delivered to you between 2pm to 4pm on " + date1.to_s
    	   #puts delivery
    elsif time >=13 and time <17
  	@delivery="Will be delivered to you between 6pm to 8pm on " + date1.to_s
    	  #puts delivery
    else
  	@delivery="Will be delivered to you between 2pm to 4 pm on " + date2.to_s
          #puts delivery
    end
  end
end
