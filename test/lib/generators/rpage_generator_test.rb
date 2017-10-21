require 'test_helper'
require 'generators/rpage/rpage_generator'

class RpageGeneratorTest < Rails::Generators::TestCase
  tests RpageGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  # test "generator runs without errors" do
  #   assert_nothing_raised do
  #     run_generator ["arguments"]
  #   end
  # end
end
