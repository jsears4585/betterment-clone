require 'HTTParty'
require 'JSON'
require 'Nokogiri'

require 'pry'

tickers = ['voo', 'bnd', 'igov', 'vxus']

tickers.map! do |ticker|
  page = HTTParty.get("http://www.nasdaq.com/symbol/#{ticker}/real-time")
  value = Nokogiri::HTML(page).css('#qwidget_lastsale')
  othervalue = Nokogiri::HTML(page).css('#qwidget_percent')
  return_this = [ticker.upcase, value.children.text, othervalue.attribute("class").value.split('-').last, othervalue.children.text]
  binding.pry
end
