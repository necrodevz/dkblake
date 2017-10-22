require 'test_helper'
require 'generators/react_page/react_page_generator'

class ReactPageGeneratorTest < Rails::Generators::TestCase
  tests ReactPageGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  # test "generator runs without errors" do
  #   assert_nothing_raised do
  #     run_generator ["arguments"]
  #   end
  # end
end
