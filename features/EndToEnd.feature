Feature: Positive send even scenario

  Scenario: Send an event and check metrics
    Given user has logged in
    And visits connections page
    And fetches the data plane url
    And fetches the write key for the source labeled as "Test Source"
    # steps can be implemented at this point for reading the metrics before sending an even so that it can be used later
    When user fires a "identify" event to "stored-value" using "stored-value"
    And select the destination card labeled as "Test Destination"
    # the logic can be adjusted based on how long it takes to reflect the metrics
    # and then can validations cab be applied accordingly for comparing before/after metrics, if required
    Then read metrics
