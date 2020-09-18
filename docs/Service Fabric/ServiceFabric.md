# Azure Service Fabric

**19.09.2018 | Contributor: Michael Marrow | Reviewed: Sandy McFarlane |  Approval: No**  

## VerIT on Azure

### What is Azure Service Fabric?

Azure Service Fabric began its existence as an internal Application Services Orchestrator built to support Microsoft’s journey to the cloud.  Using this platform, Microsoft developed many of their key Cloud offerings including Skype for Business, Cosmos DB, Cortana and Microsoft Power BI.  Based on their internal success Microsoft has made the Service Fabric platform available both to be used on Premise and as a Managed Cloud Service.   For the sake of this document, the focus will be on the managed cloud service although many of the key concepts can be applied to any Service Fabric implementation.  

Azure Service Fabric simplifies the packaging, deployment, and scaling of microservices and containers. The underlying infrastructure components are completely managed to allow developers to focus on service development rather than having to manage the compute, storage and networking components.  Reliability and Scalability are achieved through the use of the Service Fabric distributed platform.  

Microservices and containers allow developers to break down large applications into manageable workloads that are easier to develop, deploy and manage.  This simplified approach offers many benefits but managing a varied set of microservices and containers can bring with it some unique challenges as well. This is where Azure Service Fabric steps in to provide for the management of the application environment.  

![Service Fabric Platform](media/servicefabricplatform.png)

### What is a Microservice?
Traditional applications bundled all of their functionality into a single service. This single service could become very complex and generally meant that the entire service would need to be down in order to implement new features and bug fixes. Scalability was complicated as the entire service would need to be scaled even if only a single function required additional resources. Achieving high availability with these services often required a significant investment in redundant hardware that added complexity to the overall architecture.  

The trend towards moving workloads into the Cloud has driven the need to reduce development time, reduce downtime and to allow for scaling on demand. The traditional single service approach is no longer practical for supporting production DevOps environments. These single large services can now be broken into a loosely coupled set of function-specific services, or microservices, that can be upgraded and scaled individually.  

From an architectural standpoint, Microservices can be seen as a variant of service-oriented architecture(SOA).  In a microservices architecture, services perform a very specific function.  Communication between services is handled via lightweight protocols, most notably via APIs.  At their simplest, microservices receive input from the calling service, perform their task and provide output.  Due to their simplified nature, microservices can be developed, deployed, scaled, updated and managed independently. Multiple microservices can be developed in parallel which improves development efficiency and reduces overall time to delivery.  

### What is in a Microservice?
A Microservice generally consists of the following components:  

**Code Package**  
A code package is a collection of all of the executables, dlls, and binaries that are required to run an individual service.   A service may contain multiple code packages with each being versioned individually.   Code Packages do not need to contain binary files, they can simply be pointers to a container image located in a container registry.  

**Configuration Package**  
A configuration package contains all of the configuration files(.json,.xml,etc.) required by a service.  

![Microservice](media/microservice.png)

### What is an Azure Service Fabric Cluster?
The basic architecture of an Azure Service Fabric(ASF) cluster is a bit different than other Azure cloud services.   Implementing an ASF cluster consists of deploying a number of customer defined virtual machines known as nodes.   Each node can host multiple instances of different services within the application stack.  This allows many service instances to be hosted by a few servers.  This reduces the number of servers required and cost of compute resources.
The Azure Service Fabric service manages the basic operations of the cluster including:

* Lifecycle Management
* Scaling and Density 
* Rolling Upgrades
* Availability Guarantees
* Policy Enforcement  
* Always on Availability
* Resource Governance 
* Support of Stateless and Stateful
* Packaging and Deployment
* Granular Versioning

After the virtual machines(nodes) have been implemented, the Service Fabric components are deployed to each node.   A cluster manifest is generated containing IP address information for each node in the cluster.   The cluster manifest is a dynamic configuration file which is updated each time a node is added or removed from the cluster.  This allows each node to communicate to each other allowing the cluster to be formed.

A Load Balancer is implemented as part of the cluster deployment.  This allows requests to the cluster to be balanced across each node hosting a specific service.

![Service Fabric Managed Cluster](media\managedcluster.png)

Developer code is uploaded to a single node in the cluster, via the Load Balancer.  The code is then stored in the Image Store where it can then be deployed to as many nodes as is required.  

Azure Service Fabric is made up of the following infrastructure services:  

**Cluster Manager Service**  
Provides for Cluster Management.  
Ports: Rest(HTTP=19080, Powershell/Fabric Client(TCP=[19000])  

**Failover Manager Service**  
Manages service load as instance are added/removed.  

**Naming Service**  
Registry mapping service instances to endpoints.  

**Fault Analysis Service**  
Allows faults to be injected into a running service for testing purposes.  

**Image Store Service**  
Stores uploaded application packages.  This service does not exist on "OneBox" single server solutions.  

**Upgrade Manager Service**  
 Manages the upgrade of the Service Fabric platform.  

### Planning Before Implementing Azure Service Fabric

Prior to deploying an Azure Service Fabric Cluster, it’s important to plan out an environment that meets business requirements.  ASF provides a lot of flexibility from a scaling perspective but a poor design can have cost and performance consequences. The following topics should be taken into consideration during the planning phases:

**Capacity Planning**
This is not an easy exercise but it is an important part of an effective design.  It will take some time to evaluate the expected workload, growth and best combination of the number of nodes and their compute sizing.  Remember, adding capacity on demand is not instantaneous so proper capacity for peak usage should be planned.  Additional details on capacity planning can be found [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-capacity-planning).  

**Define Security/Compliance Requirements.**  
Security and Compliance requirements can influence where and how an ASF cluster is deployed.  Understanding these requirements before implementing the cluster can save a lot of work and headaches down the road if the solution is found to be non-compliant.  

**Define the Availability Requirements**  
Planning should take into consideration both planned and unplanned downtime.   Having seven nodes in a single cluster will protect against an outage due to the failure of a single node.  However, if all seven nodes reside in the same Fault Domain, a larger issue in the hosting data center could result in all seven nodes being down.  In addition, if all nodes reside in the same Upgrade Domain, an issue related to an upgrade of the service fabric platform could affect all seven nodes as well.   With careful planning, a balance between cost and uptime can be found that meets requirements without overspending.  

**Determine the Required Level of Reliability**  
The more replicas of each service that exist directly influences the reliability of the entire solution. Microsoft defines reliability tiers based on the number of service replicas there are in the cluster.  The reliability tiers, as defined by Microsoft, are as follows:  
    **Bronze Reliability Tier**:  Requires 3 Service Replicas.  
    **Silver Reliability Tier**:  Requires 5 Service Replicas.  
    **Gold Reliability Tier**:  Requires 7 Service Replicas.  
    **Platinum Reliability Tier**: Requires 9 Service Replicas.  

## Security Considerations

Azure Service Fabric(ASF) manages the cluster of machines that have been provisioned to execute application workloads in the form of microservices.  It’s important to secure the server cluster from unauthorized access, especially when they are running production workloads.  Failure to take the appropriate steps to secure the ASF Cluster could result in allowing anonymous users to connect to the cluster.

When deploying an ASF cluster the following topics should be considered:

### Node-to-node Security

Within the ASF Cluster, it’s important to ensure that only authorized servers can participate in the server cluster.  ASF makes use of X.509 certificates to confirm the identity of authorized cluster servers.  The primary certificate is set during the provisioning process.  Optionally, a secondary certificate can be created to be used for certificate rollovers.  Certificates used for Node-to-node security should be unique for this purpose and should not be used to secure other ASF components. It’s important that these certificates are properly managed as an invalid or expired certificate will cause the cluster to fail.  Details for managing these certificates can be found [here]( https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-security-update-certs-azure).

### Client-to-node Security

Access to the Azure Service Fabric cluster can be secured using Azure Active Directory.  This allows clients to be authenticated making use of their normal active directory credentials regardless of how they are accessing the cluster(Azure Portal, CLI, Azure Service Fabric Explorer or Visual Studio).  Microsoft provides instructions for setting up Azure AD for ASF [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-creation-via-arm#set-up-azure-active-directory-for-client-authentication)

In addition, providing access to the cluster, for Administrators and Users, can be secured making use of certificates.  When the cluster is provisioned an administrator and a user certificate can be specified.  Clients connecting to the cluster must make use of one of these certificates.  Each certificate provides a different level of access to the cluster:
* Administrator Certificate: Provides full access to cluster management functions.
* User Certificate: Provides read-only access to cluster management functions.

Microsoft recommends using certificates to secure Node-to-node communication and Azure AD for client-to-node security.

### Automated Deployment

When deploying cloud services, it is generally considered the best practice to automate the deployment of required resources.  Azure Service Fabric is no different and support is available for scripting its deployment making use of Powershell and ARM templates.  Templates should drive all changes to the cluster in order to simplify configuration management.  All templates and supporting scripts should be part of your code management process.

Additional details can be found later in this document or in the Microsoft documentation found [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cluster-creation-via-arm).

In addition, the following features should be considered as part of the automation process:
* Azure Key Vault should be used to store certificates, keys and secrets used to deploy and operate the ASF cluster.
* Scripts should be used to manage the generation, deployment, and rollover of secrets.
* Access to the Azure Key Vault by users should be tightly managed.

### Networking

An Azure Service Fabric cluster is made up of virtual servers that are part of an [Azure Virtual Machine Scale Set](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview). This allows ASF clusters to make use of any feature that has been developed for use with VM Scale Sets.  This includes a rather large networking toolbox that includes Azure ExpressRoute, Azure VPN Gateway and Azure Network Security Groups.

When implementing an ASF cluster, careful consideration should be taken to evaluate the best way to secure network access for cluster nodes, management clients, and application users.   Network Security Groups should be used to set up rules that can be used to manage cluster traffic including:
* Internal Cluster Communication
* Segregation of Application Tiers
* Creation of a Perimeter Network(DMZ)
* Access to published Application
* Limiting Management Access to the cluster(Use of a Jump Server)

However, care must be taken when implementing these rules in order to ensure that internal cluster communication is maintained.

Microsoft provides examples of specific Service Fabric networking patterns [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-patterns-networking).

### Application Security Recommendations

For the purposes of this document, the security of the developed code is primarily out of scope.  However, there are a few features developers should consider when developing code to be used in an Azure Service Fabric environment:
* Azure AD Credentials can be used to manage access to both web-based and native client applications.
* Azure Key Vault provides a secure place to store keys and secrets used to deploy and execute applications.  More details can be found [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-application-secret-management).
* Make use of security policies to manage the following, service setup entry point, console redirection and security access policy for HTTP and HTTPs endpoints.

## Secure implementation requirements summary
````
[must] Use unique Certificates to secure Node-to-Node communications.
[must] Secure Client-to-node communications using Azure AD or Certificate.
[must] Use RBAC to secure access to the Azure Service Fabric Cluster.
[must] Limit Administrator Access to the Azure Service Fabric Cluster.
[must] Include Deployment Templates and Scripts in Code Management process.
[must] Use Network Security Groups to manage and secure Cluster and Application traffic.
[must] Ensure application data is accessed and stored securely (“in transit” and “at rest”) in accordance with other VerIT on Azure documentation.
[should] Create a Secondary Certificate to be used during Certificate Rollover.
[should] Use Azure Key Vault to store AFS Cluster certificates, keys and secrets.
[should] Use Azure AD to secure Client-to-node communications.
[should] Use Templates and Scripts to deploy and update Azure Service Fabric Clusters.
[should] Implement Azure Service Fabric Clusters using the Secure Cluster Template.
[should] Implement a Perimeter Network(DMZ).
[should] Use Jump Servers to Manage Azure Service Fabric Clusters
[should] Use Azure AD Credentials to authenticate to applications, where possible.
[should] Use Azure Key Vault to store Application Keys and Secrets.
[should] Use ASF Security Policies to secure applications.

[must]=required security implementation, [should]=recommended security best practice

````
## Provision by Code

### PowerShell script for creating a Secure Azure Service Fabric Cluster

````
# Parameters Section
$rgName   	= "GSSIT-InfraDev-ServiceFabric-EUS"    	# Name of resource group to create
$certfolder      	=  "c:\mycertificates\"                 		# Path to store Certificate
$adminuser     	= "vmadmin"                            		# Administrator User
$clustername  	= "gssitinfraafs"                      		# Service Fabric Cluster Name
$vmsku             	= "Standard_D2_v2"                     		# Azure VM Sku
$kvname          	= "kvgssitinfraafs"                    		# Key Vault Name
$clustersize     	= 5                                    			# Set the number of cluster nodes(1, 3-99)

# Passwords
$certpwd        = "Password#1234" | ConvertTo-SecureString -AsPlainText -Force  	# Certificate Password
$adminpwd    = "Password#1234" | ConvertTo-SecureString -AsPlainText -Force  	# Administrator Password

#Import AzureRM modules
Import-Module AzureRM.Profile
Import-Module AzureRM.Resources
Import-Module AzureRM.ServiceFabric

# Sign in
Add-AzureRMAccount

# Select Azure Subscription
$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru
Select-AzureRMSubscription -SubscriptionName $subscriptionId

#Select Location
$clusterloc= (Get-AzureRMLocation).DisplayName | Out-GridView -Title "Select Azure Location:" -PassThru

#Generate Sub Domain Name
$subname="$clustername.$clusterloc.cloudapp.azure.com"

# Create Resource Group
$resourcegroup=New-AzureRmResourceGroup -Name $rgName -Location $clusterloc -Force

# Create the Service Fabric cluster.
New-AzureRmServiceFabricCluster -Name $clustername -ResourceGroupName $resourcegroup.ResourceGroupName `
-Location $clusterloc -ClusterSize $clustersize -VmUserName $adminuser -VmPassword $adminpwd `
-CertificateSubjectName $subname -CertificatePassword $certpwd -CertificateOutputFolder $certfolder `
-OS WindowsServer2016DatacenterwithContainers -VmSku $vmsku -KeyVaultName $kvname
````

## Accessing an Azure Service Fabric Cluster
Once the Service Fabric Cluster has been provisioned, the Service Fabric Explorer can be used to manage and monitor the performance of the cluster.  Service Fabric Explorer is a web-based tool hosted directly within the cluster.
The first time you access the Service Fabric Explorer, the certificate created during the installation must be installed on the local PC.  In order to do this:
1.	Open Windows Explorer and browse to the folder where the certificate was created during the implementation of the Service Fabric Cluster.  In the example script, this is stored in the $certfolder variable.
2.	Right Click on the certificate file(.pfx) and select Install PFX.
3.	Complete the Certificate Import Wizard providing the Certificate Password used in the Service Fabric Cluster setup script.  

Once the certificate has been installed, the Service Fabric Cluster can be accessed using the link documented in the Service Fabric Cluster configuration in the Azure Portal.  

Additional details regarding the use of the Service Fabric Explorer can be found [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-visualizing-your-cluster).  

In addition, the Service Fabric Cluster can be accessed via PowerShell or the Azure CLI.   Instructions for accessing the cluster can be found [here](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-connect-to-secure-cluster).   Command Line access does require the installation of the [Service Fabric SDK](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-get-started).  

An example of establishing a connection to the cluster from Powershell and checking the overall health:

````
# Parameters Section
$endpoint 	= "[name].[region].cloudapp.azure.com:19000"
$thumbprint 	= “*****************************************”			#Can be found in the Azure Portal.  

# Sign in
Add-AzureRMAccount

# Select Azure Subscription
$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru
Select-AzureRMSubscription -SubscriptionName $subscriptionId

# Establish connection to the Service Fabric Cluster

Connect-ServiceFabricCluster -ConnectionEndpoint $endpoint `
          -KeepAliveIntervalInSec 10 `
          -X509Credential -ServerCertThumbprint $thumbprint `
          -FindType FindByThumbprint -FindValue $thumbprint `
          -StoreLocation CurrentUser -StoreName My

#Check Cluster Health
Get-ServiceFabricClusterHealth
````

### Scaling an Azure Service Fabric Cluster
Adding additional capacity to an Azure Service Fabric Cluster consists of adding additional nodes to the cluster.  Service Fabric will automatically recognize the new the nodes and make them available for use.  The PowerShell Code below will add one additional node to the existing cluster.
````
# Parameters Section
$rgName         	= "GSSIT-InfraDev-ServiceFabric-EUS"   			# Name of the Resource Group
$endpoint 	= "[name].[region].cloudapp.azure.com:19000"
$thumbprint 	= “*****************************************”			#Can be found in the Azure Portal.  


# Sign in
Add-AzureRMAccount

# Select Azure Subscription
$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru
Select-AzureRMSubscription -SubscriptionName $subscriptionId

# Establish connection to the Service Fabric Cluster

Connect-ServiceFabricCluster -ConnectionEndpoint $endpoint `
          -KeepAliveIntervalInSec 10 `
          -X509Credential -ServerCertThumbprint $thumbprint `
          -FindType FindByThumbprint -FindValue $thumbprint `
          -StoreLocation CurrentUser -StoreName My

$scaleset = Get-AzureRmVmss -ResourceGroupName $rgname -VMScaleSetName nt1vm
$scaleset.Sku.Capacity += 1

Update-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm `
-VirtualMachineScaleSet $scaleset
````

Removing a node from the cluster requires that the node be disabled first and then removed.  The script below identifies the most recently created node then disables and removes it:
````
# Parameters Section
$rgName         	= "GSSIT-InfraDev-ServiceFabric-EUS"   			# Name of the Resource Group
$endpoint 	= "[name].[region].cloudapp.azure.com:19000"
$thumbprint 	= “*****************************************”			#Can be found in the Azure Portal.  

# Sign in
Add-AzureRMAccount

# Select Azure Subscription
$subscriptionId = (Get-AzureRMSubscription).Name | Out-GridView -Title "Select Azure Subscription" -PassThru
Select-AzureRMSubscription -SubscriptionName $subscriptionId

# Establish connection to the Service Fabric Cluster

Connect-ServiceFabricCluster -ConnectionEndpoint $endpoint `
          -KeepAliveIntervalInSec 10 `
          -X509Credential -ServerCertThumbprint $thumbprint `
          -FindType FindByThumbprint -FindValue $thumbprint `
          -StoreLocation CurrentUser -StoreName My
# Get the node that was created last
$node = Get-ServiceFabricNode | Sort-Object NodeInstanceId -Descending | Select-Object -First 1

# Node details for the disable/stop process
$nodename = $node.NodeName
$nodeid = $node.NodeInstanceId

$loopTimeout = 10

# Run disable logic
Disable-ServiceFabricNode -NodeName $nodename -Intent RemoveNode -TimeoutSec 300 -Force

$state = Get-ServiceFabricNode | Where-Object NodeName -eq $nodename | Select-Object -ExpandProperty NodeStatus

while (($state -ne [System.Fabric.Query.NodeStatus]::Disabled) -and ($loopTimeout -ne 0))
{
    Start-Sleep 5
    $loopTimeout -= 1
    $state = Get-ServiceFabricNode | Where-Object NodeName -eq $nodename | Select-Object -ExpandProperty NodeStatus
    Write-Host "Checking state... $state found"
}

# Exit if the node was unable to be disabled
if ($state -ne [System.Fabric.Query.NodeStatus]::Disabled)
{
    Write-Error "Disable failed with state $state"
}
else
{
    # Stop node
    $stopid = New-Guid
    Start-ServiceFabricNodeTransition -Stop -OperationId $stopid -NodeName $nodename -NodeInstanceId $nodeid -StopDurationInSeconds 300

    $state = (Get-ServiceFabricNodeTransitionProgress -OperationId $stopid).State
    $loopTimeout = 10

    # Watch the transaction
    while (($state -eq [System.Fabric.TestCommandProgressState]::Running) -and ($loopTimeout -ne 0))
    {
        Start-Sleep 5
        $state = (Get-ServiceFabricNodeTransitionProgress -OperationId $stopid).State
        Write-Host "Checking state... $state found"
    }

    if ($state -ne [System.Fabric.TestCommandProgressState]::Completed)
    {
        Write-Error "Stop transaction failed with $state"
    }
    else
    {
        # Remove the node from the cluster
        Remove-ServiceFabricNodeState -NodeName $nodename -TimeoutSec 300 -Force
    }
}

$scaleset = Get-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm
$scaleset.Sku.Capacity -= 1

Update-AzureRmVmss -ResourceGroupName $rgName -VMScaleSetName nt1vm -VirtualMachineScaleSet $scaleset
````
