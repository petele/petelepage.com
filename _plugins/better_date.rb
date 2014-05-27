# Public: Prints the date in a nicely formatted way (North America centric).
#
#
# Examples
#
#   {{ page.date | betterdate }}
#   # => "st"
#
# Returns the formatted date string.

module Jekyll
  module BetterDate
    def betterdate_short_date(date)
      date.strftime("%b %-d, %Y");
    end
    def betterdate_date(date)
      date.strftime("%B %-d, %Y");
    end
    def betterdate_long_date(date)
      date.strftime("%A %B %-d, %Y");
    end
    def betterdate_datetime(date)
      date.strftime("%B %-d, %Y %l:%M %P");
    end
    def betterdate_time(date)
      date.strftime("%l:%M %P");
    end
  end
end

Liquid::Template.register_filter(Jekyll::BetterDate)