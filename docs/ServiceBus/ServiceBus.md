# Azure Service Bus

**26.10.2017 | Contributors: Morten Larsen | Reviewed: No | Approval: *Pending***

## VerIT on Azure

#### What is Azure Service Bus?

Azure Service Bus is the message queuing platform that provides *Topic*, *Relay* and *Queue* messaging capabilities.  It is a feature rich service that can provide a means for decoupled systems to exchange information independently.

*Queues* - allow one-directional communication. Each queue acts as an intermediary (sometimes called a broker) that stores sent messages until they are received (FIFO). Each message is received by a single recipient. Consists of two receiver modes: 1) Peek & Lock 2) Receive & Delete

*Relay* - provide bi-directional communication. Unlike queues and topics, a relay doesn't store in-flight messages; it's not a broker. Instead, it just passes them on to the destination application.

*Topics* - provide one-directional communication using subscriptions- a single topic can have multiple subscriptions. Like a queue, a topic acts as a broker, but each subscription can optionally use a filter to receive only messages that match specific criteria. Consists of two receiver modes: 1) Peek & Lock 2) Receive & Delete

![](https://i.imgur.com/PwdHzc6.png)

## Security

Shared Access Signatures (SAS) are the primary security mechanism for Service Bus messaging. Applications gain access to Azure Service Bus functions using Shared Access Signature (SAS) token authentication.  

SAS authentication enables applications to authenticate to Service Bus using an access key configured on the root namespace, or on the sub messaging entity (queue or topic) with which specific rights are associated. You must then use this key to generate a SHA-256 SAS token that clients can in turn use to authenticate to Service Bus.

SAS authentication enables you to grant a user access to Service Bus resources with specific rights (Manage, Send, Listen). SAS authentication in Service Bus involves the configuration of a cryptographic key with associated rights on a Service Bus resource. Clients can then gain access to that resource by presenting a SAS token, which consists of the resource URI being accessed and an expiry signed with the configured key. 

You can configure SAS keys on a Service Bus namespace. The key applies to all messaging entities in that namespace. You can, and should, rather configure keys on Service Bus queues and topics. SAS is also supported on Azure Relay. 

To use SAS, you can configure a SharedAccessAuthorizationRule object on a namespace, queue, or topic. This rule consists of the following elements: 

• *KeyName* that identifies the rule.

• *PrimaryKey* is a cryptographic key used to sign/validate SAS tokens.

• *SecondaryKey* is a cryptographic key used to sign/validate SAS tokens.

• *Rights* representing the collection of Listen, Send, or Manage rights granted.
 
Authorization rules configured at the root namespace level will grant access to all entities in a namespace for clients with tokens signed using the corresponding key. Up to 12 such authorization rules can be configured on a Service Bus namespace, queue, or topic. By default, a SharedAccessAuthorizationRule with all rights is configured for every namespace when it is first provisioned. Instead of using this default SAS key,  you should configure a SAS key on the sublevel entity you require access to - Topic or Queue.

To access an entity, the client requires a SAS token generated using a specific SharedAccessAuthorizationRule. The SAS token is generated using the HMAC-SHA256 of a resource string that consists of the resource URI to which access is claimed, and an expiry with a cryptographic key associated with the authorization rule. 

SAS authentication support for Service Bus is included in the Azure .NET SDK versions 2.0 and later. SAS includes support for a SharedAccessAuthorizationRule. All APIs that accept a connection string as a parameter include support for SAS connection strings.

## *Secure implementation requirements summary*
```
 
[must] Use the access key to generate a SHA-256 SAS token that clients can in turn use to authenticate to Service Bus
[should] Configure keys on Service Bus queues and topics rather than on the namespace 

[must]=required security implementation, [should]=recommended security best practice
```

## *Provisioning by code*

Service Bus namespace and a queue example:


...json

    {
      "$schema": "http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#",
      "contentVersion": "1.0.0.0",
      "parameters": {
    "serviceBusNamespaceName": {
      "type": "string",
      "metadata": {
    "description": "Name of the Service Bus namespace"
      }
    },
    "serviceBusQueueName": {
      "type": "string",
      "metadata": {
    "description": "Name of the Queue"
      }
    }
      },
      "variables": {
    "defaultSASKeyName": "RootManageSharedAccessKey",
    "authRuleResourceId": "[resourceId('Microsoft.ServiceBus/namespaces/authorizationRules', parameters('serviceBusNamespaceName'), variables('defaultSASKeyName'))]",
    	"sbVersion": "2017-04-01"
      },
      "resources": [
    {
      "apiVersion": "2017-04-01",
      "name": "[parameters('serviceBusNamespaceName')]",
      "type": "Microsoft.ServiceBus/Namespaces",
      "location": "[resourceGroup().location]",
      "sku": {
    "name": "Standard"
      },
      "properties": {},
      "resources": [
    {
      "apiVersion": "2017-04-01",
      "name": "[parameters('serviceBusQueueName')]",
      "type": "Queues",
      "dependsOn": [
    "[concat('Microsoft.ServiceBus/namespaces/', parameters('serviceBusNamespaceName'))]"
      ],
      "properties": {
    "lockDuration": "PT5M",
    "maxSizeInMegabytes": "1024",
    "requiresDuplicateDetection": "false",
    "requiresSession": "false",
    "defaultMessageTimeToLive": "P10675199DT2H48M5.4775807S",
    "deadLetteringOnMessageExpiration": "false",
    "duplicateDetectionHistoryTimeWindow": "PT10M",
    "maxDeliveryCount": "10",
    "autoDeleteOnIdle": "P10675199DT2H48M5.4775807S",
    "enablePartitioning": "false",
    "enableExpress": "false"
      }
    }
      ]
    }
      ],
      "outputs": {
    "NamespaceConnectionString": {
      "type": "string",
      "value": "[listkeys(variables('authRuleResourceId'), variables('sbVersion')).primaryConnectionString]"
    },
    "SharedAccessPolicyPrimaryKey": {
      "type": "string",
      "value": "[listkeys(variables('authRuleResourceId'), variables('sbVersion')).primaryKey]"
    }
      }
    }
    

Powershell execution command:

    New-AzureRmResourceGroupDeployment -ResourceGroupName \<resource-group-name\> -TemplateFile <path to json deployment file seen above>