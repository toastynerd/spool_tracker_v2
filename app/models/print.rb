class Print < ApplicationRecord
  validates :settings, :rfid, :print_file, presence: true
end
