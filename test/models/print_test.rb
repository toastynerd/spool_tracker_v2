require "test_helper"

class PrintTest < ActiveSupport::TestCase
  setup do
    @params = {
      rfid: "some test rfid",
      print_file: "thingiverse.com/something",
      notes: "these are the test notes for this peice",
      settings: '{"print": "this is a test print"}'
    }
  end

  test "it should save with valid params" do 
    print = Print.new(@params)

    assert print.save
  end

  test "it should not save without a settings value" do
    @params.delete :settings
    print = Print.new(@params)

    assert_not print.save
  end

  test "it should not save without an rfid vale" do
    @params.delete :rfid
    print = Print.new(@params)

    assert_not print.save
  end

  test "it sould not save without a print_file value" do
    @params.delete :print_file
    print = Print.new(@params)

    assert_not print.save
  end
end
