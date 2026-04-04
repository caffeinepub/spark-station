import Time "mo:core/Time";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Service = {
    #webDevelopment;
    #appDevelopment;
    #productDesign;
    #branding;
    #consultancy;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    phone : ?Text;
    service : Service;
    message : Text;
    timestamp : Int;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  let inquiries = Map.empty<Principal, Inquiry>();

  public shared ({ caller }) func sendInquiry(name : Text, email : Text, phone : ?Text, service : Service, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
    };
    inquiries.add(caller, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };
};
