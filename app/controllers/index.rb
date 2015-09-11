get '/' do
  # Look in app/views/index.erb
  @username = ""
  erb :index
end
