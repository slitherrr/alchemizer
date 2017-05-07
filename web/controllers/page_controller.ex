defmodule Alchemizer.PageController do
  use Alchemizer.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
