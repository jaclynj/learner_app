class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation
  has_secure_password

  validates_presence_of :password, :on => :create
  validates :password, :length => {:within => 6..40}, :on => :create

  validates_presence_of :email
  validates_uniqueness_of :email
end
