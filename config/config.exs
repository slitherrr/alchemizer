# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :alchemizer,
  ecto_repos: [Alchemizer.Repo]

# Configures the endpoint
config :alchemizer, Alchemizer.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "6AHUBp2gbrd3PwDPouXBFODy3IR9z3ojHLpvZSrDgeIpkywzQoq+OOf93uZygcEI",
  render_errors: [view: Alchemizer.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Alchemizer.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
