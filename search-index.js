var searchIndex = {};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers in either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"BE","","A type alias for `BigEndian`.",null,null],[6,"LE","","A type alias for `LittleEndian`.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u24","","Reads an unsigned 24 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i24","","Reads a signed 24 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u16_into","","Reads a sequence of unsigned 16 bit integers from the underlying reader.",0,null],[11,"read_u32_into","","Reads a sequence of unsigned 32 bit integers from the underlying reader.",0,null],[11,"read_u64_into","","Reads a sequence of unsigned 64 bit integers from the underlying reader.",0,null],[11,"read_i16_into","","Reads a sequence of signed 16 bit integers from the underlying reader.",0,null],[11,"read_i32_into","","Reads a sequence of signed 32 bit integers from the underlying reader.",0,null],[11,"read_i64_into","","Reads a sequence of signed 64 bit integers from the underlying reader.",0,null],[11,"read_f32_into_unchecked","","Reads a sequence of IEEE754 single-precision (4 bytes) floating point numbers from the underlying reader.",0,null],[11,"read_f64_into_unchecked","","Reads a sequence of IEEE754 double-precision (8 bytes) floating point numbers from the underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u24","","Writes an unsigned 24 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i24","","Writes a signed 24 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"f64"}],"output":{"name":"result"}}],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[11,"read_u24","","Reads an unsigned 24 bit integer from `buf`, stored in u32.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[11,"write_u24","","Writes an unsigned 24 bit integer `n` to `buf`, stored in u32.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i24","","Reads a signed 24 bit integer from `buf`, stored in i32.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i24","","Writes a signed 24 bit integer `n` to `buf`, stored in i32.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[10,"read_u16_into","","Reads unsigned 16 bit integers from `src` into `dst`.",2,null],[10,"read_u32_into","","Reads unsigned 32 bit integers from `src` into `dst`.",2,null],[10,"read_u64_into","","Reads unsigned 64 bit integers from `src` into `dst`.",2,null],[11,"read_i16_into","","Reads signed 16 bit integers from `src` to `dst`.",2,null],[11,"read_i32_into","","Reads signed 32 bit integers from `src` into `dst`.",2,null],[11,"read_i64_into","","Reads signed 64 bit integers from `src` into `dst`.",2,null],[11,"read_f32_into_unchecked","","Reads IEEE754 single-precision (4 bytes) floating point numbers from `src` into `dst`.",2,null],[11,"read_f64_into_unchecked","","Reads IEEE754 single-precision (4 bytes) floating point numbers from `src` into `dst`.",2,null],[10,"write_u16_into","","Writes unsigned 16 bit integers from `src` into `dst`.",2,null],[10,"write_u32_into","","Writes unsigned 32 bit integers from `src` into `dst`.",2,null],[10,"write_u64_into","","Writes unsigned 64 bit integers from `src` into `dst`.",2,null],[11,"write_i16_into","","Writes signed 16 bit integers from `src` into `dst`.",2,null],[11,"write_i32_into","","Writes signed 32 bit integers from `src` into `dst`.",2,null],[11,"write_i64_into","","Writes signed 64 bit integers from `src` into `dst`.",2,null],[11,"write_f32_into","","Writes IEEE754 single-precision (4 bytes) floating point numbers from `src` into `dst`.",2,null],[11,"write_f64_into","","Writes IEEE754 double-precision (8 bytes) floating point numbers from `src` into `dst`.",2,null],[10,"from_slice_u16","","Converts the given slice of unsigned 16 bit integers to a particular endianness.",2,null],[10,"from_slice_u32","","Converts the given slice of unsigned 32 bit integers to a particular endianness.",2,null],[10,"from_slice_u64","","Converts the given slice of unsigned 64 bit integers to a particular endianness.",2,null],[11,"from_slice_i16","","Converts the given slice of signed 16 bit integers to a particular endianness.",2,null],[11,"from_slice_i32","","Converts the given slice of signed 32 bit integers to a particular endianness.",2,null],[11,"from_slice_i64","","Converts the given slice of signed 64 bit integers to a particular endianness.",2,null],[10,"from_slice_f32","","Converts the given slice of IEEE754 single-precision (4 bytes) floating point numbers to a particular endianness.",2,null],[10,"from_slice_f64","","Converts the given slice of IEEE754 double-precision (8 bytes) floating point numbers to a particular endianness.",2,null],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"bigendian"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",3,null],[11,"cmp","","",3,{"inputs":[{"name":"self"},{"name":"bigendian"}],"output":{"name":"ordering"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"bigendian"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"self"},{"name":"bigendian"}],"output":{"name":"option"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"bigendian"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"littleendian"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",4,null],[11,"cmp","","",4,{"inputs":[{"name":"self"},{"name":"littleendian"}],"output":{"name":"ordering"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"littleendian"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"self"},{"name":"littleendian"}],"output":{"name":"option"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"littleendian"}}],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16_into","","",3,null],[11,"read_u32_into","","",3,null],[11,"read_u64_into","","",3,null],[11,"write_u16_into","","",3,null],[11,"write_u32_into","","",3,null],[11,"write_u64_into","","",3,null],[11,"from_slice_u16","","",3,null],[11,"from_slice_u32","","",3,null],[11,"from_slice_u64","","",3,null],[11,"from_slice_f32","","",3,null],[11,"from_slice_f64","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u16_into","","",4,null],[11,"read_u32_into","","",4,null],[11,"read_u64_into","","",4,null],[11,"write_u16_into","","",4,null],[11,"write_u32_into","","",4,null],[11,"write_u64_into","","",4,null],[11,"from_slice_u16","","",4,null],[11,"from_slice_u32","","",4,null],[11,"from_slice_u64","","",4,null],[11,"from_slice_f32","","",4,null],[11,"from_slice_f64","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u24","","Reads an unsigned 24 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i24","","Reads a signed 24 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from the underlying reader.",0,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read_u16_into","","Reads a sequence of unsigned 16 bit integers from the underlying reader.",0,null],[11,"read_u32_into","","Reads a sequence of unsigned 32 bit integers from the underlying reader.",0,null],[11,"read_u64_into","","Reads a sequence of unsigned 64 bit integers from the underlying reader.",0,null],[11,"read_i16_into","","Reads a sequence of signed 16 bit integers from the underlying reader.",0,null],[11,"read_i32_into","","Reads a sequence of signed 32 bit integers from the underlying reader.",0,null],[11,"read_i64_into","","Reads a sequence of signed 64 bit integers from the underlying reader.",0,null],[11,"read_f32_into_unchecked","","Reads a sequence of IEEE754 single-precision (4 bytes) floating point numbers from the underlying reader.",0,null],[11,"read_f64_into_unchecked","","Reads a sequence of IEEE754 double-precision (8 bytes) floating point numbers from the underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u24","","Writes an unsigned 24 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i24","","Writes a signed 24 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"u64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"i64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to the underlying writer.",1,{"inputs":[{"name":"self"},{"name":"f64"}],"output":{"name":"result"}}]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
searchIndex["dns_parser"] = {"doc":"","items":[[3,"Question","dns_parser","A parsed chunk of data in the Query section of the packet",null,null],[12,"qname","","",0,null],[12,"prefer_unicast","","Whether or not we prefer unicast responses. This is used in multicast DNS.",0,null],[12,"qtype","","",0,null],[12,"qclass","","",0,null],[3,"ResourceRecord","","A single DNS record",null,null],[12,"name","","",1,null],[12,"multicast_unique","","Whether or not the set of resource records is fully contained in the packet, or whether there will be more resource records in future packets. Only used for multicast DNS.",1,null],[12,"cls","","",1,null],[12,"ttl","","",1,null],[12,"data","","",1,null],[3,"OptRecord","","RFC 6891 OPT RR",null,null],[12,"udp","","",2,null],[12,"extrcode","","",2,null],[12,"version","","",2,null],[12,"flags","","",2,null],[12,"data","","",2,null],[3,"Packet","","Parsed DNS packet",null,null],[12,"header","","",3,null],[12,"questions","","",3,null],[12,"answers","","",3,null],[12,"nameservers","","",3,null],[12,"additional","","",3,null],[12,"opt","","Optional Pseudo-RR When present it is sent as an RR in the additional section. In this RR the `class` and `ttl` fields store max udp packet size and flags respectively. To keep `ResourceRecord` clean we store the OPT record here.",3,null],[3,"SoaRecord","","",null,null],[12,"primary_ns","","",4,null],[12,"mailbox","","",4,null],[12,"serial","","",4,null],[12,"refresh","","",4,null],[12,"retry","","",4,null],[12,"expire","","",4,null],[12,"minimum_ttl","","",4,null],[3,"Name","","The DNS name as stored in the original packet",null,null],[3,"Header","","Represents parsed header of the packet",null,null],[12,"id","","",5,null],[12,"query","","",5,null],[12,"opcode","","",5,null],[12,"authoritative","","",5,null],[12,"truncated","","",5,null],[12,"recursion_desired","","",5,null],[12,"recursion_available","","",5,null],[12,"authenticated_data","","",5,null],[12,"checking_disabled","","",5,null],[12,"response_code","","",5,null],[12,"questions","","",5,null],[12,"answers","","",5,null],[12,"nameservers","","",5,null],[12,"additional","","",5,null],[3,"Builder","","Allows to build a DNS packet",null,null],[4,"Type","","The TYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",6,null],[13,"NS","","an authoritative name server",6,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",6,null],[13,"CNAME","","the canonical name for an alias",6,null],[13,"SOA","","marks the start of a zone of authority",6,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",6,null],[13,"MG","","a mail group member (EXPERIMENTAL)",6,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",6,null],[13,"NULL","","a null RR (EXPERIMENTAL)",6,null],[13,"WKS","","a well known service description",6,null],[13,"PTR","","a domain name pointer",6,null],[13,"HINFO","","host information",6,null],[13,"MINFO","","mailbox or mail list information",6,null],[13,"MX","","mail exchange",6,null],[13,"TXT","","text strings",6,null],[13,"AAAA","","IPv6 host address (RFC 2782)",6,null],[13,"SRV","","service record (RFC 2782)",6,null],[13,"OPT","","EDNS0 options (RFC 6891)",6,null],[4,"QueryType","","The QTYPE value according to RFC 1035",null,null],[13,"A","","a host addresss",7,null],[13,"NS","","an authoritative name server",7,null],[13,"MF","","a mail forwarder (Obsolete - use MX)",7,null],[13,"CNAME","","the canonical name for an alias",7,null],[13,"SOA","","marks the start of a zone of authority",7,null],[13,"MB","","a mailbox domain name (EXPERIMENTAL)",7,null],[13,"MG","","a mail group member (EXPERIMENTAL)",7,null],[13,"MR","","a mail rename domain name (EXPERIMENTAL)",7,null],[13,"NULL","","a null RR (EXPERIMENTAL)",7,null],[13,"WKS","","a well known service description",7,null],[13,"PTR","","a domain name pointer",7,null],[13,"HINFO","","host information",7,null],[13,"MINFO","","mailbox or mail list information",7,null],[13,"MX","","mail exchange",7,null],[13,"TXT","","text strings",7,null],[13,"AAAA","","IPv6 host address (RFC 2782)",7,null],[13,"SRV","","service record (RFC 2782)",7,null],[13,"AXFR","","A request for a transfer of an entire zone",7,null],[13,"MAILB","","A request for mailbox-related records (MB, MG or MR)",7,null],[13,"MAILA","","A request for mail agent RRs (Obsolete - see MX)",7,null],[13,"All","","A request for all records",7,null],[4,"Class","","The CLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",8,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete RFCs)",8,null],[13,"CH","","the CHAOS class",8,null],[13,"HS","","Hesiod [Dyer 87]",8,null],[4,"QueryClass","","The QCLASS value according to RFC 1035",null,null],[13,"IN","","the Internet",9,null],[13,"CS","","the CSNET class (Obsolete - used only for examples in some obsolete RFCs)",9,null],[13,"CH","","the CHAOS class",9,null],[13,"HS","","Hesiod [Dyer 87]",9,null],[13,"Any","","Any class",9,null],[4,"ResponseCode","","The RCODE value according to RFC 1035",null,null],[13,"NoError","","",10,null],[13,"FormatError","","",10,null],[13,"ServerFailure","","",10,null],[13,"NameError","","",10,null],[13,"NotImplemented","","",10,null],[13,"Refused","","",10,null],[13,"Reserved","","",10,null],[4,"Opcode","","The OPCODE value according to RFC 1035",null,null],[13,"StandardQuery","","",11,null],[13,"InverseQuery","","",11,null],[13,"ServerStatusRequest","","",11,null],[13,"Reserved","","",11,null],[4,"Error","","Error parsing DNS packet",null,null],[13,"BadPointer","","",12,null],[13,"HeaderTooShort","","",12,null],[13,"UnexpectedEOF","","",12,null],[13,"WrongRdataLength","","",12,null],[13,"ReservedBitsAreNonZero","","",12,null],[13,"UnknownLabelFormat","","",12,null],[13,"InvalidQueryType","","",12,null],[13,"InvalidQueryClass","","",12,null],[13,"InvalidType","","",12,null],[13,"InvalidClass","","",12,null],[13,"LabelIsNotAscii","","",12,null],[13,"TxtDataIsNotUTF8","","",12,null],[13,"WrongState","","",12,null],[13,"AdditionalOPT","","",12,null],[4,"RRData","","The enumeration that represents known types of DNS resource records data",null,null],[13,"CNAME","","",13,null],[13,"NS","","",13,null],[13,"A","","",13,null],[13,"AAAA","","",13,null],[13,"SRV","","",13,null],[12,"priority","dns_parser::RRData","",13,null],[12,"weight","","",13,null],[12,"port","","",13,null],[12,"target","","",13,null],[13,"SOA","dns_parser","",13,null],[13,"PTR","","",13,null],[13,"MX","","",13,null],[12,"preference","dns_parser::RRData","",13,null],[12,"exchange","","",13,null],[13,"TXT","dns_parser","",13,null],[13,"Unknown","","",13,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"type"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"type"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"querytype"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"querytype"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"class"}],"output":{"name":"bool"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"class"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"self"},{"name":"queryclass"}],"output":{"name":"bool"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"queryclass"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"self"},{"name":"opcode"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"self"},{"name":"opcode"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"opcode"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",10,{"inputs":[{"name":"self"},{"name":"responsecode"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"self"},{"name":"responsecode"}],"output":{"name":"bool"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"responsecode"}}],[11,"from","","",11,{"inputs":[{"name":"u16"}],"output":{"name":"opcode"}}],[11,"into","","",11,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[11,"from","","",10,{"inputs":[{"name":"u8"}],"output":{"name":"responsecode"}}],[11,"into","","",10,{"inputs":[{"name":"self"}],"output":{"name":"u8"}}],[11,"parse","","",7,{"inputs":[{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",9,{"inputs":[{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",6,{"inputs":[{"name":"u16"}],"output":{"name":"result"}}],[11,"parse","","",8,{"inputs":[{"name":"u16"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"name"}}],[11,"scan","","",14,null],[11,"byte_len","","",14,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",3,null],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",12,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",12,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"header"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"header"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"header"}}],[11,"parse","","",5,null],[11,"write","","Write a header to a buffer slice",5,null],[11,"set_truncated","","",5,null],[11,"size","","",5,{"inputs":[],"output":{"name":"usize"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",13,null],[11,"new_query","","Creates a new query",15,{"inputs":[{"name":"u16"},{"name":"bool"}],"output":{"name":"builder"}}],[11,"add_question","","Adds a question to the packet",15,{"inputs":[{"name":"self"},{"name":"str"},{"name":"querytype"},{"name":"queryclass"}],"output":{"name":"builder"}}],[11,"build","","Returns the final packet",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}]],"paths":[[3,"Question"],[3,"ResourceRecord"],[3,"OptRecord"],[3,"Packet"],[3,"SoaRecord"],[3,"Header"],[4,"Type"],[4,"QueryType"],[4,"Class"],[4,"QueryClass"],[4,"ResponseCode"],[4,"Opcode"],[4,"Error"],[4,"RRData"],[3,"Name"],[3,"Builder"]]};
searchIndex["quick_error"] = {"doc":"A macro which makes errors easy to write","items":[[3,"Context","quick_error","Generic context type",null,null],[12,"0","","",0,null],[12,"1","","",0,null],[8,"ResultExt","","Result extension trait adding a `context` method",null,null],[10,"context","","The method is use to add context information to current operation",1,{"inputs":[{"name":"self"},{"name":"x"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"quick_error","","Main macro that does all the work",null,null]],"paths":[[3,"Context"],[8,"ResultExt"]]};
initSearch(searchIndex);
